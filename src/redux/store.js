import { createStore } from 'redux';
import reducer from './reducer';


const initialState = {
    user: {
        name: 'Kiran',
        surname: 'Kodarkar',
        email: 'kd@gmail.com',
        mobile: '9421336699',
        tutionname: 'Kshamata Varshan Academia',
        address: {
            address: 'Chausalkar Colony',
            state: 'Maharashtra',
            city: 'Ambajogai',
            pin: '431517'
        }
    },
    mytests: {
        0: {
            testtitle: 'NTS I',
            instructions: 'Not expected from you',
            targetaudience: '8th',
            suscribed: '500',
            sheduled: '24/02/2020',
            questions: {
                0: {
                    que: 'What does kaka do on katta?',
                    opt1: 'Mashya Marne',
                    opt2: 'Dada chi udavne',
                    opt3: 'Mitransobt Gappa',
                    opt4: 'Tavalkya'
                },
                1: {
                    que: 'Ratri zopayla gelyavr Cricket khellas kadhi?',
                    opt1: 'Yep',
                    opt2: 'Nope',
                    opt3: 'Tula kas kalal',
                    opt4: 'dada gharich navhata'
                },
                2: {
                    que: 'Arnav fakt porinkadech jato ka?',
                    opt1: 'ek no cha chavat aahe',
                    opt2: 'madarchod sala',
                    opt3: 'tyala kahi kalat nahi',
                    opt4: 'bapavr gelaye to'
                }
            }
        },
        1: {
            testtitle: 'NTS II',
            instructions: 'Killing attitute pahije',
            targetaudience: '10th',
            suscribed: '633',
            sheduled: '27/02/2020',
            questions: {
                0: {
                    que: 'Dada timepass karto ka?',
                    opt1: 'Hao',
                    opt2: 'Nahi',
                    opt3: 'Kalu n deta',
                    opt4: 'Tyala kahi farak padat nahi'
                },
                1: {
                    que: 'Dadan kharach company sodli hoti ka?',
                    opt1: 'Hao',
                    opt2: 'with respect',
                    opt3: 'hakall hot tyala',
                    opt4: 'To tarrya marto'
                },
                2: {
                    que: 'Classes ki tution?',
                    opt1: 'Classes',
                    opt2: 'Tution',
                    opt3: 'Je pahije te mhana',
                    opt4: 'Nakoch jayla'
                }
            }

        }

    }
};


export const store = createStore(reducer, initialState);