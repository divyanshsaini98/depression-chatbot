function addBotMessage(message) {
    $('.panel-body').append(
        `<div class="row msg_container base_receive">
            <div class="col-md-2 col-xs-2 avatar">
                <img src="ana.JPG"
                    class=" img-responsive ">
            </div>
            <div class="col-md-10 col-xs-10">
                <div class="messages msg_receive">
                    <p>${message}</p>   
                </div>
            </div>
        </div>`
    );
}

function addUserMessage() {
    var message = $('#btn-input').val();

    $('.panel-body').append(
        `<div class="row msg_container base_sent">
            <div class="col-xs-10 col-md-10">
                <div class="messages msg_sent">
                    <p>${message}</p>
                </div>
            </div>
            <div class="col-md-2 col-xs-2 avatar">
                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                    class=" img-responsive ">
            </div>
        </div>`
    );

    // Make the input field empty
    $('#btn-input').val('');

    // Divyansh  here insted if this comment line you must Send input to backend i.e to us bot....
    // Call addBotMessage(replyFromBackend)..... here ander the input to ur bot the output text generated must be displayed here 
	//using the below func... remove the below messg hello! sss.... replace it with ur mssg.. thats it..
	addBotMessage('Hello! ssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssss sssssssssssssssssssssssss');
}				

$(document).on('click', '#btn-chat', addUserMessage);
$('#btn-input').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		addUserMessage();
	}
});

addBotMessage('Hello!');
