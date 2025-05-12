"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link } from "react-router-dom"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional()
})

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {

    if (data.email === "user@tcs.com" && data.password === "password") {
      window.location.href = "/"
    } else {
      alert("Please enter valid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
          
          <img
            src= {"src/images/tcs_logo.svg"}
            alt="TCS Logo"
            style={{height:'50px'}}
          />
          </div>
          <CardTitle className="text-2xl font-normal text-gray-800">Sign in</CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Email address" 
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Password" 
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="remember" 
                {...register("remember")}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Sign in
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2 text-sm">
          <Link to={'#'} className="text-blue-600 hover:underline">
            Use Multifactor Authentication
          </Link>
          <Link to={'#'} className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}