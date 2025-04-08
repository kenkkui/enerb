// "use client";

// import { useEffect } from "@node_modules/@types/react";
// import { useAnimate } from "framer-motion";

// const BlurDiv = () => {
//   const [scope, animate] = useAnimate();
//   const namePeople = "Dominic & Kenzo";

//   function splitWord(word: string) {
//     const split = word.split("");
//     return split.map((ltr, i) => {
//       return <div key={i}>{ltr === " " ? <span>&nbsp;</span> : ltr}</div>;
//     });
//   }

//   useEffect(() => {});

//   return (
//     <div
//       ref={scope}
//       className="bg-blur absolute top-0 left-0 w-screen h-screen backdrop-blur-[30px] pointer-events-none flex justify-center items-center"
//     >
//       <div className=" h-1/2 w-1/2 bg-oval-primary rounded-[50%]  flex justify-center items-center text-center blur-[200px]"></div>
//       <div className="absolute -transform-x-1/2 -tranform-y-1/2 text-center">
//         <div className="font-light text-[96px] tracking-tight leading-22 flex justify-center">
//           {splitWord(namePeople)}
//         </div>
//         <div className="font-light text-[56px] tracking-tight leading-22 flex justify-center">
//           {splitWord("Presents")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlurDiv;
