export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:'BQBkBK6xRKBoxnEwdyq26US4-PbrnG-44E4Qb2_Uc2ldrZIaTgTdEnDYUxI3T3qTSHpPN_Pu4uH9yzk2A2y7G0Pm-KcR9goZ4Bv4KhTfof5NG_5TykI5nJGwcQuPaTcXM_ow2Ds9c6nptDzaPSVXeicRtkeB9VoOpSghWqmGF12x-s5oKWzw'
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        default :
            return state;
    }
}

export default reducer;