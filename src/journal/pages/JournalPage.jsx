import { IconButton } from "@mui/material"
import  {AddOutlined} from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { useDispatch,useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";


export const JournalPage = () => {

  const {isSaving,active} =useSelector(state =>state.journal);
  console.log("stateJournal",active)

const dispatch =useDispatch();
  const onClickNew =()=>{
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
    {/*<Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illum cupiditate dolorem ipsum placeat! Impedit quo aliquid expedita? Quisquam sunt quae incidunt dignissimos accusamus odio autem quidem aut corrupti dolores.</Typography>*/}
    {/*nada seleccionado*/}
    {
      (!!active) ? <NoteView/>: <NothingSelectedView/>
    }

    <IconButton onClick={onClickNew}
    disabled={isSaving}
    size="large"
    sx={{
      color:'white',
      backgroundColor:'error.main',
      ':hover':{backgroundColor:'error.main',opacity:0.9},
      position:'fixed',
      right:50,
      bottom:50
    }}>
  <AddOutlined sx={{fontSize:30}}/>
    </IconButton>

    </JournalLayout>
  )
}
