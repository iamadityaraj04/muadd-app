
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
})
    
    //getting count of data
    app.get("/api/employees/count",async (req,res)=>{
        try{
        const empData=await employees.find().count();
    res.send(`<h1>Total Employees: ${empData}</h1>`);
    }catch(err){
        res.send(err);
    }
})

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})




// //creating collection/model for performing CRUD operations
// const employees=new mongoose.model("emp_info",listSchema);

// //inserting data
// const insertDoc = async() => {
//     try {
//         const emp=new employees({
//             firstName: 'Aayush',
//             lastName: 'Kumar',
//             email: 'aayush.kumar@gmail.com',
//             mobile: '8673-561-234',
//             gender: 'male',
//             designation: 'SDE',
//             reportingManager: 'Aditya',
//             salary: 87809889,
//             employeeCode: 104,
//             location: 'Gorakhpur',
//             state: 'Uttar Pradesh',
//             country: 'India',
//             department: 'Development',
//             dateOfJoining: "2018-12-10T13:49:51.141Z",
//             deletedAt: "2019-12-10T13:49:51.141Z"
//         })
//         const result=await emp.save();
//         console.log(result);
        
//     } catch (err) {
//         console.log(err);
//     }
// }
// //insertDoc();

// //reading document
// const getDoc= async ()=>{
//     const result= await employees.find();
//     console.log(result);
// }
// getDoc();