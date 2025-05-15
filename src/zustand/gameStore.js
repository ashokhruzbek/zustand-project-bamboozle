import { create } from "zustand"

const questions = [
	{
		id: 1,
		text: "Eng katta sayyora qaysi?",
		answer: "Yupiter",
		point: 10
	},
	{
		id: 2,
		text: "Eng katta Qit'a?",
		answer: "Osiyo",
		point: 5
	},
	{
		id: 3,
		text: "Eng baland cho'qqi?",
		answer: "Everest",
		point: 15
	},
	{
		id: 4,
		text: "Everestdan oldingi eng baland cho'qqi?",
		answer: "Everest",
		point: 20
	},
	{
		id: 5,
		text: "Ikkita birni bir-biriga qo'shganda qachon bir hosil bo'ladi?",
		answer: "Ikki tomchi",
		point: 25
	},
	{
		id: 6,
		text: "2+2*2?",
		answer: "6",
		point: 10
	},
	{
		id: 7,
		text: "Ustozingiznig yoshi nechchida (Cyber Security)?",
		answer: "...",
		point: 25
	},
	{
		id: 8,
		text: "Kuratoringizning mashinasining raqami necha?",
		answer: "01 V 885 QC",
		point: 15
	},
]

export const useGameStore = create((set) => ({
	questions,
	currenQuestion: null,
	setCurrentQuestion: (question) => set((state)=>(
		{
			currenQuestion: question
		}
	))
}))