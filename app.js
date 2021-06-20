var name = prompt("Welcome to arab Hardware, what is your name?")

alert("welcome to Arab Hardware "  + name  +  " please explore our website too see our new offers :)")
function choice (){
var choice = prompt("what are you looking for "+ name +"?\n" + 
"CPU's\n" + "GPU's\n" + "Rams\n" + "accessories\n")
while(choice!="CPU's" && choice!= "GPU's" && choice!= "Rams" &&choice != "accessories" )
{
choice=prompt(" We don't have these itmes right now, please try another choice")
}
console.log(choice)
if(choice == "CPU's"){
  var NumberOfPictures 
  NumberOfPictures=prompt("how many Pictures you want to view?")
  for(i=0;i<NumberOfPictures;i++)
  document.write("<div>"+"<h3>"+"Harry Potter"+"</h3>"+
        "<img src='https://www.techspot.com/images2/news/bigimage/2017/07/2017-07-24-image-20.jpg' >"+
      "</div>")
}
 else if(choice == "GPU's")
{
  NumberOfPictures=prompt("how many Pictures you want to view?")
  for(i=0;i<NumberOfPictures;i++)
 document.write("<div>"+"<h3>"+"GPU's"+"</h3>"+
        "<img src='https://cdn.wccftech.com/wp-content/uploads/2020/11/NVIDIA-SLIDE-3.jpg' >"+
      "</div>"
 )


}

else if(choice == "Rams")
{
  NumberOfPictures=prompt("how many Pictures you want to view?")
  for(i=0;i<NumberOfPictures;i++)
 document.write("<div>"+"<h3>"+"Rams"+"</h3>"+
        "<img src='https://www.binarytides.com/blog/wp-content/uploads/2020/12/ram-474x400.jpg' >"+
      "</div>")
}

else if(choice=="accessories")
{
  NumberOfPictures=prompt("how many Pictures you want to view?")
  for(i=0;i<NumberOfPictures;i++)
  document.write("<div>"+"<h3>"+"accessories"+"</h3>"+
        "<img src='https://5.imimg.com/data5/SELLER/Default/2020/11/PY/YR/DY/72916241/all-computer-accessories-500x500.jpeg' >"+
      "</div>")
}

  else{
  alert("we apologize to you, your order is not avalible now, keep eyes on out website, we will have great things soon :))")
}

}
choice();


function rating (number){
  
for (var i = 0; i < number ; i++) {

  document.write("<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1005px-Star_empty.svg.png' >")
}
  // return starsNum;
}

 var starsNum = prompt('How many stars do you rate our website ?')
 
rating(starsNum);