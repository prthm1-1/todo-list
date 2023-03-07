const express=require("express")
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")

const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

const todo1=["Buy Food",
    "Cook Food",
    "Eat Food"
];

app.get("/",(req,res)=>{
    // let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // let day=undefined;
    // let dayToday=today.getDay()

    const day=date.getDate();
    res.render("list",{listTitle:day, newItem:todo1});
    // const dayname=new Promise((resolve,reject)=>{
    //     if(dayToday===6 || dayToday===0){
    //         resolve(day=week[dayToday]);
    //         }else{
    //             reject(day=week[dayToday]);
    //     }
    // })
    // dayname.then((day)=>{
    //     res.render("list",{kindOfday:day});
    // }).catch((day)=>{
    //     res.render("list",{kindOfday:day});
    // });
    // if(dayToday===6 || dayToday===0){
    //     day=week[dayToday];
    //     }else{
    //         day=week[dayToday];
    // }
    // res.render("list",{kindOfday:day});
})

app.post("/",(req,res)=>{
    const todo=req.body.newItem;
    if(req.body.list==="work list"){
        workItems.push(todo);
        res.redirect("/work");
    }else{
        todo1.push(todo);
        res.redirect("/");
    }
    console.log(todo1);
    
})

const workItems=[];

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work list",newItem:workItems});
});

app.post("/work",function(req,res){
    const item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})



app.listen(port,function(){
    console.log(`Server app listening on port ${port}`);
})