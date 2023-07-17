import React from 'react';
import images from '../../Assets/images/myimage.png';
import CardBody from '../CardBody/CardBody';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineCastForEducation, MdDeveloperBoard } from 'react-icons/md';
import { BiCloudDownload } from 'react-icons/bi';
import { DataItem } from '../../Assets/Locales/informationPersonnelle';
import CV from '../../Assets/images/Reda IBENAHMED.pdf';

const Body = () => {

    const GenerateData = () => {
        return DataItem.map((e) => {
            return <CardBody
                icon={e.icon}
                titre={e.titre}
                text={e.text}
            />
        })
    }

    return (
        <div className='Body'>
            <section className='Body_section'>
                <img src={images} alt='image' className='Body_section_img' />
                <div className='Body_section_content'>
                    <h1 className='Body_section_content_header'>Full  Stack  Web Developer </h1>
                    <p className='Body_section_content_paragraphe'>Plus d'un an d'expérience sur le marché du travail au Maroc dans le domaine web development, je crée des applications et des sites Web de haute qualité, et les outils utilisés en back-end sont java/JEE, quant à la construction d'interfaces Front-end pour l'utilisateur, j'utilise framework javascript react js. </p>
                    <ul className='Body_section_content_list'>
                        <li className='Body_section_content_list_item'>
                            <span><BsInstagram /></span>
                            <a href='https://www.instagram.com/reda.ibena' target='_blank' titre="Instagram" title='Instagram'> Instagram</a>
                        </li>
                        <li className='Body_section_content_list_item'>
                            <span><BsGithub /></span>
                            <a href='https://github.com/IBENAHMED' target='_blank' titre="Github" title='Github'> Github</a>
                        </li>
                        <li className='Body_section_content_list_item'>
                            <span><AiFillLinkedin /></span>
                            <a href='https://www.linkedin.com/in/reda-ibenahmed-851765232/' target='_blank' titre="LinkedinIn" title='LinkedinIn'>LinkedinIn</a>
                        </li>
                        <li className='Body_section_content_list_item'>
                            <span><BiCloudDownload /></span>
                            {/* <a href={CV} download>download CV</a> */}
                            <a style={{ cursor: "not-allowed", color: "#767676" }}>download CV</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='Body_Card'>
                <div className='Body_Cards'>
                    {GenerateData()}
                </div>
            </section>
        </div>
    )
}

export default Body