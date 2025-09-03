const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const { default: mongoose } = require("mongoose");


mongoose.connect(process.env.URL).then(()=>{
      console.log("🤝✅ Connected to MongoDB Successfully 🤝✅");
      app.listen(port,()=>{
      console.log(`Server is Running on 🚀 http://localhost:${port} 🚀`)
})   
})
.catch((err)=>{
      console.log("Error connecting to MongoDB ❌", err);
})