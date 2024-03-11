'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import useStore from '../../store/store';
import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

// TypeScript interface for questions
interface Questions {
  [key: number]: string;
}

const questions: Questions = {
  2: "Áttu von á þínu fyrsta barni?",
  3: "Fæddist barnið með keisara?",
  4: "Áttu von á einu barni?",
  5: "Ertu almennt hraust?",
  6: "Hafa skoðanir á meðgöngu verið eðlilegar?"
};

export default function DecisionGuide({page}:{page: any}) {
  const router = useRouter();
  const [questionNumber, setQuestionNumber] = useState<number>(2);
  const setBestOption = useStore((state) => state.setBestOption);

  const goToNextPage = (bestOption: number) => {
    setBestOption(bestOption);
    router.push(`/bestaVal/val${bestOption}`); // Navigate to next page with dynamic route
  };

  const handleAnswer = (answer: boolean) => {
    switch (questionNumber) {
        case 2:
            if(answer){
                setQuestionNumber(4)
            }
            else{
                setQuestionNumber(3)
            }
            break;
        case 3:
            if(answer){
                goToNextPage(1)
            }
            else{
                setQuestionNumber(4)
            }
            break;
        case 4:
            if(answer){
                setQuestionNumber(5)
            }
            else{
                goToNextPage(1)
            }
            break;
        case 5:
            if(answer){
                setQuestionNumber(6)
            }
            else{
                goToNextPage(2)
            }
            break;
        case 6:
            if(answer){
                goToNextPage(3)
            }
            else{
                goToNextPage(0)
            }
            break;
        default:
            setQuestionNumber(1)
    }
    };

  return (
    <div>
        <SliceZone slices={page.data.slices} components={components} />
            <Bounded>
        <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center
        rounded-lg bg-gradient-to-tr from-orange-50 via-white to-amber-50">
            
            <h4 className="text-2xl md:text-3xl font-bold font-body text-slate-900 leading-tight tracking-tight pb-5">
                {questions[questionNumber]}
            </h4>
            <div className="flex justify-center space-x-2">
                <Button onClick={() => handleAnswer(true)}>Já</Button>
                <Button onClick={() => handleAnswer(false)}>Nei</Button>
            </div>

        </div>

    </Bounded>
    </div>


  );
};

