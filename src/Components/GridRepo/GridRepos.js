import useFetch from '../../Hooks/useFetch';
import Login from '../Login/Login';
import { Grid } from './GridRepos.style';
import Repo from './Repo/Repo';
import { useHistory } from 'react-router-dom'

const GridRepos = ({ name }) => {
  const { data, status, error } = useFetch(`https://api.github.com/users/${name}/repos`);
  const history = useHistory()

  let content 

  console.log(error)
  // if(status === 'loading') content = 'loading'
  if(error) {
    history.push('/notFound')
  }
  if(status === 'succeded'){
      content = 'haha'
  }

  if(data){
    content = data.map(element=>{
        return <Repo enlace={element.html_url}name={element.name}  watchers={element.watchers} forks={element.forks} language={element.language}/>

    })

}


  return <Grid>

      {content}


  </Grid>;
};

export default GridRepos;