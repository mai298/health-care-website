import React from 'react';
import'./Blog.css';
import { Container, Row } from 'react-bootstrap';
import LatestNews from '../../Components/LatestNews';
import doc2 from'../../assets/member2.d03a0686030bcd2f05ec.jpg';
import teeth from'../../assets/teeth.jpg';
import doctors from '../../assets/doctors.jpg';
import surgery from '../../assets/surgery.jpg';
import needle from '../../assets/needile.jpg';
import pressure from'../../assets/pressure.jpg';
import nurse from '../../assets/download (5).jpeg';
import diabetic from'../../assets/diabetic.jpg';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import glassDoc from '../../assets/download (1).jpeg';
import family from'../../assets/family.jpg';
import Banner from '../../Components/Banner';
import Pagination from 'react-bootstrap/Pagination';

export default function Blog() {

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item  key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

  return (
<>
<Banner title="Blog" secTitle="Blog"/>
<section className='latest mx-auto'>
    <Container>
        <Row>
        <LatestNews newsImg={teeth} titleImg={nurse} title="John deo" icon={faCalendar} date="21 July 2021" text="In This Hospital There Are Special Surgeon"/>
            <LatestNews newsImg={doctors} titleImg={doc2} title="Peter Packer"  icon={faCalendar} date="20 July 2021" text="Can You Get A Diflucan Prescriptopn Online?" />
            <LatestNews newsImg={surgery} titleImg={glassDoc} title="Sonar Moyna "  icon={faCalendar} date="19 July 2021" text=" Why Is Skin Surgeon Considered Underrated?"/>

            <LatestNews newsImg={needle} titleImg={nurse} title="Kalina" icon={faCalendar} date=" 18 July 2021" text="Understand Health Before You Regret"/>
            <LatestNews newsImg={pressure} titleImg={doc2} title="Michel"  icon={faCalendar} date="17 July 2021" text="Health Will Be A Thing Of The Past And Here" />
            <LatestNews newsImg={teeth} titleImg={glassDoc} title="Peter Packer"  icon={faCalendar} date="16 July 2021" text="Can you get a diflucan prescription online?"/>

            <LatestNews newsImg={diabetic} titleImg={nurse} title="John deo" icon={faCalendar} date="21 July 2021" text="In This Hospital There Are Special Surgeon"/>
            <LatestNews newsImg={doctors} titleImg={doc2} title="Peter Packer"  icon={faCalendar} date="20 July 2021" text="Can You Get A Diflucan Prescriptopn Online?" />
            <LatestNews newsImg={family} titleImg={glassDoc} title="Sonar Moyna "  icon={faCalendar} date="19 July 2021" text=" Why Is Skin Surgeon Considered Underrated?"/>

        </Row>

        <div>
    <Pagination className='mx-auto mt-4' style={{width:"12rem"}}>{items}</Pagination>
    <br />
  </div>
    </Container>

</section>
</>
  )
}
