import {IonContent, IonHeader, IonTitle, IonToolbar, IonSlides, IonSlide, IonButton} from '@ionic/react';
import React, {useState} from 'react';

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const Home: React.FunctionComponent = () => {

    const [slides, setSlides] = useState([
        {id: '1', text: 'Slide 1'},
        {id: '2', text: 'Slide 2'},
        {id: '3', text: 'Slide 3'},
        {id: '4', text: 'Slide 4'},
        {id: '5', text: 'Slide 5'}
    ]);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonButton onClick={() => setSlides(slides.slice(1))}>
                    Remove first slide
                </IonButton>

                <IonSlides pager={true} options={slideOpts}>
                    {slides.map(slide => (<IonSlide key={slide.id}><h1>{slide.text}</h1></IonSlide>))}
                </IonSlides>
            </IonContent>
        </>
    );
};

export default Home;