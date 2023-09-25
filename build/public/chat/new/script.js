window.onload = function() {
    // Connect to the server
    var socket = new WebSocket("ws://h-and-c.co.uk:443");

    // DOM elements
    var onlineUserList = document.getElementById('online-users');
    var messageListBox = document.getElementById('messages-list');
    var messageInput = document.getElementById('message');
    var sendButton = document.getElementById('send-btn');

    // User data
    var userName;

    // Event listener for new connection
    socket.onopen = function() {
        // Prompt for user name
        userName = prompt('Enter your name:', 'Anonymous');

        // Send user data to server
        var data = {type: 'user', name: userName};
        socket.send(JSON.stringify(data));
    };

    // Event listener for incoming messages
    socket.onmessage = function(event) {
        // Parse incoming data
        var data = JSON.parse(event.data);
        
        // Handle incoming data based on type
        if (data.type === 'message') {
            // Add new message to message list
            var li = document.createElement('li');
            var from = document.createElement('span');
            var time = document.createElement('span');
            var text = document.createElement('span');

            from.classList.add('from');
            time.classList.add('time');
            text.classList.add('text');

            from.textContent = data.from + ':';
            time.textContent = new Date().toLocaleTimeString();
            text.textContent = data.message;

            li.appendChild(from);
            li.appendChild(time);
            li.appendChild(text);

            messageListBox.appendChild(li);

            // Scroll to bottom of message list
            messageListBox.scrollTop = messageListBox.scrollHeight - messageListBox.clientHeight;

        } else if (data.type === 'user_list') {
            // Update online user list
            onlineUserList.innerHTML = '';

            for (var i = 0; i < data.users.length; i++) {
                var li = document.createElement('li');

                li.textContent = data.users[i];
                li.setAttribute('user-name', data.users[i]);

                if (data.users[i] === userName) {
                    li.classList.add('active');
                }

                li.addEventListener('click', function(event) {
                    var name = event.target.getAttribute('user-name');
                    messageInput.value = '@' + name + ' ';
                });

                onlineUserList.appendChild(li);
            }
        }
    };

    // Event listener for disconnect
    socket.onclose = function(event) {
        alert('Socket closed: ' + event.code + ' ' + event.reason);
    };

    // Send button click event
    sendButton.addEventListener('click', function() {
        // Get message and clear input field
        var message = messageInput.value.trim();
        messageInput.value = '';

        // Send message to server
        var data = {type: 'message', message: message};
        socket.send(JSON.stringify(data));
    });
}
