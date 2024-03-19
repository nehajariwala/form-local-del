let product=JSON.parse(localStorage.getItem('data'))||[]


const uimaker=()=>{

    document.getElementById("box").innerHTML="";
   
        product.map((ele,i) => {
      

        let title=document.createElement("h1")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let del=document.createElement("button")
        del.innerHTML="delete"
  
      
        del.addEventListener("click",()=>{
          product.splice(i,1)
          uimaker();
          localStorage.setItem("data",JSON.stringify(product));
  
        })
         
        
    
         
        let div=document.createElement("div")
        div.append(img,title,price,del)

        div.setAttribute("class","data");


        document.getElementById("box").append(div)

    })
     
    }
    uimaker()
  
const handaldata=(e)=>{
      e.preventDefault();

   let data={
    title:document.getElementById('title').value,
    img:document.getElementById('src').value,
    price:document.getElementById('price').value,
 

   }

   product.push(data);
 
   localStorage.setItem("data",JSON.stringify(product));
   uimaker();
}






document.getElementById("form").addEventListener("submit",handaldata)