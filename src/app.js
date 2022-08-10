
const express=require("express");
const app=express();
require("./db/con.js");
const employees=require("./models/empSchema.js")

const port=8080;

app.get("/", (req,res)=>{
    res.send("hello");
})
app.use(express.json());

//inserting data using post method
app.post("/api/employee",(req,res)=>{
    const emp=new employees(req.body);
    emp.save().then(()=>{
        res.send(emp);
    }).catch((err)=>{
        res.send(err);
    })
})

//getting data
app.get("/api/employees",async (req,res)=>{

        if(req.query.firstname){
            try{
                const empData=await employees.find({FirstName:req.query.firstname});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.lastname){
            try{
                const empData=await employees.find({LastName:req.query.lastname});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.department){
            try{
                const empData=await employees.find({Department:req.query.department});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.gender){
            try{
                const empData=await employees.find({Gender:req.query.gender});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.employeecode){
            try{
                const empData=await employees.find({EmployeeCode:req.query.employeecode});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.email){
            try{
                const empData=await employees.find({Email:req.query.email});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.designation){
            try{
                const empData=await employees.find({Designation:req.query.designation});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.reportingmanager){
            try{
                const empData=await employees.find({ReportingManager:req.query.reportingmanager});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        if(req.query.location){
            try{
                const empData=await employees.find({Location:req.query.location});
                res.send(empData);
            }catch(err){
                res.send(err);
            }
        }
        

})
    
//getting count of data
app.get("/api/employees/count",async (req,res)=>{
    if(req.query){
        if(req.query.firstname){
            try{
                const empData=await employees.find({FirstName:req.query.firstname}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.lastname){
            try{
                const empData=await employees.find({LastName:req.query.lastname}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.department){
            try{
                const empData=await employees.find({Department:req.query.department}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.gender){
            try{
                const empData=await employees.find({Gender:req.query.gender}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.reportingmanager){
            try{
                const empData=await employees.find({ReportingManager:req.query.reportingmanager}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.email){
            try{
                const empData=await employees.find({Email:req.query.email}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.location){
            try{
                const empData=await employees.find({Location:req.query.location}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
        if(req.query.designation){
            try{
                const empData=await employees.find({Designation:req.query.designation}).count();
                res.send(`<h1>Total Employees: ${empData}</h1>`);
            }catch(err){
                res.send(err);
            }  
        }
    }else{
        try{
            const empData=await employees.find().count();
            res.send(`<h1>Total Employees: ${empData}</h1>`);
        }catch(err){
            res.send(err);
        }
    }
})

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})



