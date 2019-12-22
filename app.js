const SerialPort = require("serialport");
const SerialPortParser = require("@serialport/parser-readline");
const GPS = require("gps");
const Request = require("request-promise");

const port = new SerialPort("/dev/ttyS0",{boudRate: 9600});
const gps = new GPS();

const parser = port.pipe(new SerialPortParser());


function getAddress(latitude,longitude){
	let address = {};
	return Request({
		"uri":"gttps://reverse.geocode.api.here.com/6.2/reversegeocode.json",
		"qs":{
			"app_id":"",
			"app_code":"",
			"mode":"",
			"prox": latitude + "," + longitude
		},
		"json": true
	}).then(result => {
		if(result.Response.View.length > 0 && result.Response.View[0].Result.length > 0){
			address = result.Response.View[0].Result[0].Location.Address;
		}
		return address;
	});
}

gps.on("data", async data =>{
	if(data.type =="GGA"){
		if(data.quality != null){
			let address = await getAddress(data.lat, data.lon);
			console.log(address.:Label);
		}
	}
});
parser.on("data", data => {
	gps.update(data);
});