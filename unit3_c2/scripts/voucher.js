let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url)
.then((res)=>{
    res.json().then((res) => {
        for(let i=0;i<res.length;i++){
            console.log(res[i]);
            append(res[i].vouchers);
        }
    });
})
.catch((error)=>{
    console.log(error)
});

let append = (res) => {
    res.forEach(function (ele){
        let box=document.createElement("div");
        box.setAttribute("class","voucher");

        let img=document.createElement("img");
        img.src=ele.image;

        let name=document.createElement("h3");
        name.innerText=ele.name;

        let h2=document.createElement("h2");
        h2.innerText=ele.price;

        let but=document.createElement("button");
        but.innerText="Buy";
        but.setAttribute("click","Onclick");

        box.append(img,name,h2,but);
        document.getElementById("voucher_list").append(box);
 });
};
