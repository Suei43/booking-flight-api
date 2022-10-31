const Flights = require("../models/Flight")
const {v4:uuid} = require("uuid")


let allFlights = Flights.exampleModel;
let newFlights;
let reqFlight;

// To get all flights
exports.getFlights = async (req,res)=>{
    try{
        res.status(200).json({
            message:"All Flights",
            allFlights}
        );
    }catch(err){
        res.status(500).json({message:err});
    }
}

// To add a new flight 
exports.newFlight = async (req,res)=>{
    try{
        newFlights = await req.body;
        newFlights.id = uuid();
        allFlights.unshift(newFlights);
        res.status(201).send({
                    message:"New Flight Created",
                     allFlights})
    }
    catch(err){
        res.status(500).json({ message: err.message})
    }
}

// To get a single flight 
exports.getSingleFlight = async(req,res)=>{
    try{
        let id = req.params.id;
        for(i=0;i<Flights.exampleModel.length;i++){
            if(id==Flights.exampleModel[i].id){
                reqFlight = Flights.exampleModel[i]
            }
        }
        res.status(200).json(
            {
                message:"Flight Details Retrieved",
                reqFlight
            }
        )
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

// To update a single Flight 
exports.updateFlight = async(req,res)=>{
    try{
        let id = req.params.id;
        const {title,time,price,date} = await req.body;
        for(i=0;i<Flights.exampleModel.length;i++){
            if(id==Flights.exampleModel[i].id){
                Flights.exampleModel[i].title = title;
                Flights.exampleModel[i].time = time;
                Flights.exampleModel[i].price = price;
                Flights.exampleModel[i].date = date;
            }
        }
        if(!title || !time){
            res.status(200).json(
                {
                    message:"Please enter a valid flight title and time!"
                })
        }else{
            res.status(200).json(
                {
                    message:"Flight Details Updated",
                    allFlights
                })
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

// To delete a flight 
exports.delFlight = async (req,res)=>{
    try{
        let id = req.params.id;
        for(i=0;i<Flights.exampleModel.length;i++){
            if(id==Flights.exampleModel[i].id){
                Flights.exampleModel[i]={};
            }
        }
        res.status(200).json(
            {
                message:`Flight id:${id} has been deleted`,
                allFlights
            }
        )
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}