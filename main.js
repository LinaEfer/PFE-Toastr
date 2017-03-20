function ToastMessage(){
	
	this.messageForm = document.getElementById('send-toast');

	this.sendToastButton = document.getElementById('send-my-toast');
	this.sendToastButton.addEventListener('click',this.sendToast.bind(this));
};

ToastMessage.prototype.sendToast = function(){
	alert('You can perform some custom action after a toast goes away');

};

//test key