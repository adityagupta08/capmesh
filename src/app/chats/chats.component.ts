import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { PerfectScrollbarComponent,PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  hasConversationsWithList = [];
  messagesBetweenUsers = [];
  newMessage = "";
  timer;
  currentUser = 106;
  otherUser = undefined;

  constructor(private chatService: ChatService) {
    this.hasConversationsWith(this.currentUser);
  }
  ngOnInit() {
    setInterval(() => {
      this.hasConversationsWith(this.currentUser);
    }, 500)
  }
  //handleOnUserChatChange
  handleOnUserChatChange(otherUser) {
    clearInterval(this.timer)
    this.otherUser = otherUser;
    this.messagesBetweenUsers = [];
    this.getConversationOf(this.otherUser);
    this.RefreshUserChats(this.otherUser)
  }
  //handle sendMessage
  handleSendMessage() {
    console.log(this.newMessage);
    let conversation = { "user1": this.currentUser, "user2": this.otherUser, "sender": this.currentUser, "content": this.newMessage };
    //  this.messagesBetweenUsers.push(conversation);
    this.addNewMessage(conversation);
    this.newMessage = "";

  }
  //function to refresh userchats
  RefreshUserChats(otherUser) {
    console.log("timer start");
    this.timer = setInterval(() => {
      this.chatService.getConversationOf({ "user1": this.currentUser, "user2": otherUser }).subscribe((messageData: test) => {
        this.messagesBetweenUsers = [];
        this.messagesBetweenUsers = messageData.val;
      });

    }, 500);
  }
  //function to fatech userlist that user  has conversation with
  hasConversationsWith(user) {
    this.chatService.hasConversationsWith({ "user": user }).subscribe((userData: test) => {
      this.hasConversationsWithList = [];
      userData.val.map(conversation => {
        let content
        if (conversation.lastMessage.content.length > 25) {
          content = conversation.lastMessage.content.substr(0, 25) + "...";
        }
        else {
          content = conversation.lastMessage.content
        }
        let userList = {
          "participant": conversation.participant[0],
          "sender": conversation.lastMessage.sender,
          "content": content,
          "timestamp": conversation.lastMessage.timestamp
        }
        this.hasConversationsWithList.push(userList);
        this.hasConversationsWithList.sort((a, b) => {
          console.log("a: " + a);
          console.log("b: " + b);
          if (a.timestamp > b.timestamp)
            return -1
          else if (a.timestamp < b.timestamp)
            return 1
          else
            return 0;
        });
      })
    });

  }
  //function to retrive messages between two users
  getConversationOf(otherUser) {
    this.chatService.getConversationOf({ "user1": this.currentUser, "user2": otherUser }).subscribe((messageData: test) => {
      this.messagesBetweenUsers = messageData.val;
    });
  }
  //function to add new message
  addNewMessage(messageObject) {
    console.log("add new msg called", messageObject);
    this.chatService.addNewMessage(messageObject).subscribe(data => {
      console.log(data);
    });
  }

  isCurrentUser(u) {
    switch (u) {
      case this.currentUser: {
        return true;
      }
      case this.otherUser: {
        return false;
      }
    }
  }


}



interface test {
  val: any
}


