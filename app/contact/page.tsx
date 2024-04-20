'use client'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  numero: number
  message: string
}
const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("name", { required: true })} />
    
          <input {...register("email", { required: true })} />

          <input {...register("numero", { required: true })} />

          <input {...register("message", { required: true })} />
  
          {errors.email && <span>This field is required</span>}
    
          <input type="submit" />
        </form>
      )
}
export default Contact