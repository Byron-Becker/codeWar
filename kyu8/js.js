function removeRotten(a){
    return (a||[]).map(x=>x.replace('rotten','').toLowerCase())
  }