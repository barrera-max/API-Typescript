import { sequelize } from "./data/config";
import { app } from "./app"; 

const PORT = 3000

app.listen(PORT, async() => {
    console.log(`Server is running on PORT: ${PORT}`)
    
    try{
        await sequelize.sync({force:true})
        console.log('BD synchronized')
    
    }   catch(error){
        console.log('Error', error)
    };
    
      

}
)