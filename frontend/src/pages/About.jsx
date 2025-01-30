import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'

const About = () => {
	return (
		<div>
			<div className='text-2xl text-center pt-8 border-t'>
				<Title text1={'DESPRE'} text2={'NOI'} />
			</div>

			<div className='my-10 flex flex-col md:flex-row gap-16'>
				<img
					className='w-full md:max-w-[450px]'
					src={assets.about_img}
					alt=''
				/>
				<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
					<p>
						La Memories, ne dedicăm furnizării celor mai bune produse și
						servicii pentru clienții noștri. Misiunea noastră este de a aduce
						calitate și satisfacție prin fiecare experiență pe care o oferim.
					</p>
					<p>
						Înființată în 2024, compania noastră este în preces de creștere
						constantă, extinzându-ne gama de produse și îmbunătățindu-ne
						serviciile pentru a răspunde nevoilor clienților noștri.
					</p>
					<b className='text-gray-800'> Misiunea Noastră</b>
					<p>
						Misiunea noastră este de a aduce cele mai plăcute amintiri prin
						parfumuri care evocă emoții profunde și momente speciale. Ne dorim
						să creăm esențe care să capteze esența fiecărei experiențe,
						transformând fiecare notă într-o amintire de neuitat. Fiecare parfum
						pe care îl oferim este conceput pentru a adăuga un strop de magie în
						viața celor care le aleg, inspirând încredere și bucurie în fiecare
						zi.
					</p>
				</div>
			</div>

			<div className=' text-xl py-4'>
				<Title text1={'DE CE'} text2={'SĂ NE ALEGI ?'} />
			</div>

			<div className='flex flex-col md:flex-row text-sm mb-20'>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Personal Prietenos:</b>
					<p className=' text-gray-600'>
						Echipa noastră amabilă și profesionistă este dedicată satisfacerii
						nevoilor tale. Oferim servicii de calitate,o
						experiență plăcută, asigurându-ne că fiecare client se simte
						apreciat.
					</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Livrare rapidă:</b>
					<p className=' text-gray-600'>
						Nu puteți ridica comanda de la biroul nostru? Ne asigurăm că
						produsul comandat va fi livrat în siguranță la ușa dumneavoastră în
						cel mai scurt timp posibil!
					</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Garanţie:</b>
					<p className=' text-gray-600'>
						Uită de orice fel de îngrijire! Oferim certificat de garanție
						pentru toate produsele pe care le avem în magazinul nostru!
					</p>
				</div>
			</div>

			<NewsletterBox />
		</div>
	)
}

export default About
