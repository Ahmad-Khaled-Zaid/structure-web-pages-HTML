var name = prompt("Welcome to arab Hardware, what is your name?")

alert("welcome to Arab Hardware "  + name  +  " please explore our website too see our new offers :)")

var choice = prompt("what are you looking for "+ name +"?\n" + 
"CPU's\n" + "GPU's\n" + "Rams\n" + "accessories\n")


if(choice == "CPU's"){
  document.write("<p>"+ " you may pick one of the our CPU's collections! "+"</p>")
}
 else if(choice == "GPU's")
{
 document.write("<div>"+"<h3>"+"Harry Potter"+"</h3>"+
        "<img src='https://cdn.wccftech.com/wp-content/uploads/2020/11/NVIDIA-SLIDE-3.jpg' >"+
      "</div>"
 )


}

else if(choice == "Rams")
{
 document.write("<p>"+ "you may pick one of the our Rams collections!"+"</p>")
}

else if(choice=="accessories")
{
  document.write("<p>"+ "you may pick one of the our accessories collections!"+"</p>")
}

  else{
  alert("we apologize to you, your order is not avalible now, keep eyes on out website, we will have great things soon :))")
}

