import spinner from 'Loading here '
// reload screen
const LoadScreen = () => {
  return (
    <div className='LoadScreen'>
      <img src = {spinner} alt ="Loading Data" />
      <h1> Loading Data </h1>
    </div>
  )
}

export default LoadScreen
