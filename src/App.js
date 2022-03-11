import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: '2/10/21',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: '2/14/21',
        reminder: true,
    },
    {
        id: 3,
        text: 'Eye Exam',
        day: '2/20/21',
        reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}


export default App;
