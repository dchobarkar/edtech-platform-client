import * as actions from '../actions/actionTypes';
import axios from '../../axios-server';

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
            testinitials: {
                testtitle: 'NTS I',
                instructions: 'Not expected from you',
                targetaudience: '8th',
                suscribed: '500',
                sheduled: '24/02/2020'
            },
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
            testinitials: {
                testtitle: 'NTS II',
                instructions: 'Killing attitute pahije',
                targetaudience: '10th',
                suscribed: '633',
                sheduled: '27/02/2020'
            },
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TESTINITIALSREGISTER:
            const newstate = Object.assign({}, state);
            newstate.mytests[1].testinitials.testtitle = action.value.newtest.title;
            newstate.mytests[1].testinitials.instructions = action.value.newtest.instructions;
            newstate.mytests[1].testinitials.targetaudience = action.value.newtest.targetaudience;
            return (
                newstate,
                axios.post('/users.json', newstate)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            )
        case actions.NEWQUESTIONREGISTER:
            const newquestion = Object.assign({}, state);
            newquestion.mytests[1].questions[2].que = action.value.newque.que;
            newquestion.mytests[1].questions[2].opt1 = action.value.newque.op1;
            newquestion.mytests[1].questions[2].opt2 = action.value.newque.op2;
            newquestion.mytests[1].questions[2].opt3 = action.value.newque.op3;
            newquestion.mytests[1].questions[2].opt4 = action.value.newque.op4;
            return (
                newquestion,
                axios.post('/users.json', newquestion)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            )
        case actions.NEWUSERREGISTER:
            const newu = Object.assign({}, state);
            newu.user.name = action.value.newuser.name;
            newu.user.surname = action.value.newuser.surname;
            newu.user.email = action.value.newuser.email;
            newu.user.mobileno = action.value.newuser.mobileno;
            newu.user.tutionname = action.value.newuser.tutionname;
            newu.user.address.address = action.value.newuser.address;
            newu.user.address.state = action.value.newuser.state;
            newu.user.address.city = action.value.newuser.city;
            newu.user.address.zip = action.value.newuser.zip;

            return (
                newu,
                axios.post('/users.json', newu)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            );

        default:
            return state;

    }
}

export default reducer;