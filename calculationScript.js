function getIP_address(){
	var ip = document.getElementById("ip_address").value;
	var mask = document.getElementById("ip_mask").value;
	if (ip=="" || mask==""){
		document.getElementById("ip_address").setAttribute('value','');
		document.getElementById("ip_mask").setAttribute('value','');	
		document.getElementById("the_mask").innerHTML = "MASK: ";
		document.getElementById("the_ip").innerHTML = "IP ADDRESS: ";
		document.getElementById("inBinary").innerHTML = "binary: ";
		document.getElementById("network").innerHTML = "Network: ";
		document.getElementById("broadcast").innerHTML = "Broadcast: ";
		document.getElementById("wildcard").innerHTML = "Wildcard: ";
		document.getElementById("netmask").innerHTML = "Netmask: ";
		document.getElementById("hosts").innerHTML = "Hosts: ";
		document.getElementById("startIP").innerHTML = "First IP: ";
		document.getElementById("lastIP").innerHTML = "Last IP: ";
	}
	else{
		basics(ip,mask);
		iptobinary(ip);
		
		ipbin=iptobinary(ip);
		
		network(ip,mask);
		broadcast(ip,mask);
		wildmask(ip,mask);
		netmask(ip,mask);
		hosts(mask);

	}
	
}
function infoclick(){
	document.getElementById("footy").style.display="block";
}

function basics(ip,mask){
	document.getElementById("the_mask").innerHTML = "MASK: "+mask;
	document.getElementById("the_ip").innerHTML = "IP ADDRESS: "+ip;
	
}
function iptobinary(ip){
	var array = ip.split(".");
	var abin = (("00000000"+parseInt(array[0]).toString(2)).substr(-8));
	var bbin = (("00000000"+parseInt(array[1]).toString(2)).substr(-8));
	var cbin = (("00000000"+parseInt(array[2]).toString(2)).substr(-8));
	var dbin = (("00000000"+parseInt(array[3]).toString(2)).substr(-8));
	var ipbin = abin + bbin + cbin + dbin;
	document.getElementById("inBinary").innerHTML = "binary: "+ipbin;
	return ipbin;
}
function network(ip,mask){
	var network01 = ipbin.substring(0,mask);
	var network02 = ipbin.substring(mask,32);
	var network_replace = network02.replaceAll("1","0");
	var networkInBinary = network01 + network_replace;
	var nt1 = networkInBinary.substring(0,8);
	var nt2 = networkInBinary.substring(8,16);
	var nt3 = networkInBinary.substring(16,24);
	var nt4 = networkInBinary.substring(24,32);
	var nw1 = parseInt(nt1, 2);
	var nw1 = nw1.toString();
	var nw2 = parseInt(nt2, 2);
	var nw2 = nw2.toString();
	var nw3 = parseInt(nt3, 2);
	var nw3 = nw3.toString();
	var nw4 = parseInt(nt4, 2);
	var nw4 = nw4.toString();
	var network = nw1+"."+nw2 +"."+nw3+"."+nw4;
	document.getElementById("network").innerHTML = "Network: "+network;
	
	var array = network.split(".");
	var last = array[3]
	var last = parseInt(last);
	var last = last+1;
	var startIP = array[0]+"."+array[1]+"."+array[2]+"."+last;
	document.getElementById("startIP").innerHTML = "Start IP: "+startIP;
}
function broadcast(ip,mask){
	var broadcast01 = ipbin.substring(0,mask);
	var broadcast02 = ipbin.substring(mask,32);
	var broadcast_replace = broadcast02.replaceAll("0","1");
	var broadcastInBinary = broadcast01 + broadcast_replace;
	var br1 = broadcastInBinary.substring(0,8);
	var br2 = broadcastInBinary.substring(8,16);
	var br3 = broadcastInBinary.substring(16,24);
	var br4 = broadcastInBinary.substring(24,32);
	var bc1 = parseInt(br1, 2);
	var bc1 = bc1.toString();
	var bc2 = parseInt(br2, 2);
	var bc2 = bc2.toString();
	var bc3 = parseInt(br3, 2);
	var bc3 = bc3.toString();
	var bc4 = parseInt(br4, 2);
	var bc4 = bc4.toString();
	var broadcast = bc1+"."+bc2 +"."+bc3+"."+bc4;
	document.getElementById("broadcast").innerHTML = "Broadcast: "+broadcast;
	
	var array = broadcast.split(".");
	var last = array[3]
	var last = parseInt(last);
	var last = last-1;
	var lastIP = array[0]+"."+array[1]+"."+array[2]+"."+last;
	document.getElementById("lastIP").innerHTML = "Last IP: "+lastIP;
}
function wildmask(ip,mask){
	var wildcard01 = ipbin.substring(0,mask);
	var wildcard02 = ipbin.substring(mask,0);
	var wildcard_replace1 = wildcard01.replaceAll("1","0");
	var wildcard_replace2 = wildcard02.replaceAll("0","1");
	var wildcardInBinary = wildcard_replace1+wildcard_replace2;
	var w01 = wildcardInBinary.substring(0,8);
	var w02 = wildcardInBinary.substring(8,16);
	var w03 = wildcardInBinary.substring(16,24);
	var w04 = wildcardInBinary.substring(24,32);
	var wld01 = parseInt(w01,2);
	var wld01 = wld01.toString();
	var wld02 = parseInt(w02,2);
	var wld02 = wld02.toString();
	var wld03 = parseInt(w03,2);
	var wld03 = wld03.toString();
	var wld04 = parseInt(w04,2);
	var wld04 = wld04.toString();
	var wildcard = wld01+"."+wld02 +"."+wld03+"."+wld04;
	document.getElementById("wildcard").innerHTML = "Wildcard: "+wildcard;
}	
function netmask(ip,mask){
	var netmask1st=ipbin.substring(0,mask);
	var netmask2nd=ipbin.substring(mask,0);
	var netmask_replace1 = netmask1st.replaceAll("0","1");
	var netmask_replace2 = netmask2nd.replaceAll("1","0");
	var netmaskInBinary = netmask_replace1 + netmask_replace2;
	var n01=netmaskInBinary.substring(0,8);
	var n02=netmaskInBinary.substring(8,16);
	var n03=netmaskInBinary.substring(16,24);
	var n04=netmaskInBinary.substring(24,32);
	var nw01=parseInt(n01,2);
	var nw01 = nw01.toString();
	var nw02=parseInt(n02,2);
	var nw02 = nw02.toString();
	var nw03=parseInt(n03,2);
	var nw03 = nw03.toString();
	var nw04=parseInt(n04,2);
	var nw04 = nw04.toString();
	var netmask = nw01+"."+nw02 +"."+nw03+"."+nw04;
	document.getElementById("netmask").innerHTML = "Netmask: "+netmask;	
}
function hosts(mask){
	var hosts = Math.pow(2,32-mask)-2
	document.getElementById("hosts").innerHTML = "Hosts: "+hosts;
}
