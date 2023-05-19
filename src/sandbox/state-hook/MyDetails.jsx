import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function MyDetails() {
     const [person, setPerson] = useState({
    fullName: { firstName: "Tzach", lastName: "Dabush" },
    email: "example@gmail.com",
  });

  
      
  return (
    <div>
   <Typography >{person.fullName.firstName} </Typography>
   <Typography >{person.fullName.lastName} </Typography>
   <TextField label="First Name" variant='outlined' onChange={(e)=>{setPerson({...person,fullName: {...person.fullName,firstName: e.target.value
  }
})
   }}/>
   <TextField label="Last Name" variant='outlined'  onChange={(e)=>{setPerson({
  ...person,
  fullName: {
    ...person.fullName,
    lastName: e.target.value
  }
})
}}/>
    </div>
  )
}
