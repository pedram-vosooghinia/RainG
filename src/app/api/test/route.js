pages/api/persons.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const query = prisma.users.findMany();
    console.log('Prisma Query:', prisma.$queryRaw`SELECT ${query}`);

    const products = await query;
    if (products) {
      return NextResponse.json({ success: true, data: products });
    } else {
      return NextResponse.json({
        status: 204,
        success: false,
        message: "No products found.",
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  } finally {
    await prisma.$disconnect();
  }
}




// "use client";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import HomeLayout from "@/components/Main/HomeLayout";
// import { MdRemoveRedEye } from "react-icons/md";
// import { IoEyeOff } from "react-icons/io5";
// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const { status, data: session } = useSession();
//   console.log("session.user", session?.user);
//   const router = useRouter();
//   useEffect(() => {
//     if (session?.user) {
//       router.push("/dashboard");
//     }
//   }, [router, session]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   async function submitHandler({ phoneNumber, password }) {
//     try {
//       const result = await signIn("credentials", {
//         redirect: false,
//         phoneNumber,
//         password,
//       });

//       if (result.error) {
//         console.log("faild");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       {status === "loading"
//         ? "Loading"
//         : !session?.user && (
//             <HomeLayout title="Login">
//               <div className="flex justify-center items-center mx-auto rtl">
//                 <form
//                   className=" mt-40 mx-2 max-w-screen-md"
//                   onSubmit={handleSubmit(submitHandler)}
//                 >
//                   <h2 className="mb-4 text-xl">ورود</h2>
//                   <div className=" w-full">
//                     <div className="mb-4">
//                       <input
//                         {...register("phoneNumber", {
//                           required: true,
//                           pattern: /^[0-9]{10}$/i,
//                         })}
//                         type="tel"
//                         className="w-full rounded-xl p-2 outline-0 bg-slate-200 rtl"
//                         id="phoneNumber"
//                         placeholder="9001234567"
//                         autoFocus
//                       />
//                       {errors.phoneNumber && (
//                         <div className="text-red-500">
//                           لطفا شماره تماس را بدون صفر وارد کنید
//                         </div>
//                       )}
//                     </div>
//                     <div className=" mb-4">
//                       <div className="relative">
//                         <input
//                           {...register("password", {
//                             required: true,
//                             // minLength: 8,
//                             // pattern:
//                             //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*.]{8,}$/,
//                           })}
//                           type={showPassword ? "text" : "password"}
//                           className="w-full rounded-xl p-2 outline-0 bg-slate-200"
//                           id="password"
//                           placeholder="رمز ورود"
//                           autoFocus
//                         />
//                       </div>
//                       {/* {errors.password && (
//                         <div className="text-red-500">
//                           رمز ورود باید حداقل 8 کاراکتر باشد و شامل یک حرف بزرگ،
//                           یک حرف کوچک و یکی از !@#$%^ باشد
//                         </div>
//                       )} */}
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <button
//                       type="button"
//                       className=""
//                       onClick={togglePasswordVisibility}
//                     >
//                       {showPassword ? (
//                         <div className="flex justify-center items-center ">
//                           <IoEyeOff />
//                           <div className="p-4">عدم نمایش پسورد</div>
//                         </div>
//                       ) : (
//                         <div className="flex justify-center items-center ">
//                           <MdRemoveRedEye />
//                           <div className=""> نمایش پسورد</div>
//                         </div>
//                       )}
//                     </button>
//                     <button className="rounded-xl bg-pedram-1 text-gray-100  py-2 w-28">
//                       ورود
//                     </button>
//                   </div>
//                   {/* <div className="flex  m-4 py-2 px-4 bg-pedram-3 rounded-lg w-fit ">
//                     <Link href="register">ثبت نام</Link>
//                   </div> */}
//                 </form>
//               </div>
//             </HomeLayout>
//           )}
//     </>
//   );
// }
