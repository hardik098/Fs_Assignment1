module.exports.ChatbotReply = function (message) {
  this.Bot_Age = 25;
  this.Bot_Name = "Joy ChatBot";
  this.Bot_University = "VNSGU";
  this.Bot_Country = "India";

  message = message.toLowerCase();

  if (
    message.indexOf("hi") > -1 ||
    message.indexOf("hello") > -1 ||
    message.indexOf("welcome") > -1
  ) {
    return "Hi! Welcome to chatBot Application";
  } else if (message.indexOf("what") > -1 && message.indexOf("name")) {
    return "I am " + this.Bot_Name;
  } else if (message.indexOf("your") > -1 && message.indexOf("age")) {
    return "I'm " + this.Bot_Age;
  } else if (
    message.indexOf("how") > -1 &&
    message.indexOf("are") &&
    message.indexOf("you")
  ) {
    return "I'm fine ^_^";
  } else if (
    message.indexOf("where") > -1 &&
    message.indexOf("live") &&
    message.indexOf("you")
  ) {
    return "I live in " + this.Bot_Country;
  }
  return "Sorry, I didn't get it :( ";
};
