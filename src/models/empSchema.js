const mongoose=require("mongoose");
const validator=require("validator");

//db schema and validation
const listSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    LastName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    Email:{
        type:String,
        required:true,
        lowercase:true,
        unique:[true,"Email Id already exists!"],
        //checking wether the email is valid or not.
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invlaid Email.")
            }
        }
    },
    Mobile:{
        type:String,
        min:10,
        max:10,
        required:true
    },
    Gender:{
        type:String,
        lowercase:true,
        required:true
    },
    Designation:{
        type:String,
        lowercase:true,
        required:true
    },
    ReportingManager:{
        type:String,
        lowercase:true,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
    EmployeeCode:{
        type:Number,
        required:true
    },
    Location:{
        type:String,
        lowercase:true,
        min:3
    },
    State:{
        type:String,
        lowercase:true,
        min:4
    },
    Country:{
        type:String,
        lowercase:true,
        min:4
    },
    Department:{
        type:String,
        lowercase:true
    },
    DateOfJoining:{
        type:Date,
        default:Date.now
    },
    DeletedAt:Date
})

//creating collection/model for performing CRUD operations
const employees=new mongoose.model("Emp_info",listSchema);

module.exports=employees;