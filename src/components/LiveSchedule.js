import { Live_Data } from '../constants';

const LiveSchedule = () => {
  return (
    <div className="text-white w-screen min-h-screen flex flex-col justify-center items-center p-10 space-y-8">
      <p className="text-2xl uppercase tracking-wide">Live Schedule</p>
      {Live_Data.map((event, index) => (
        <div key={index} className="w-full max-w-2xl border-t-4 border-white last:border-b py-6 space-y-4">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 inline-block mr-4">{event.name}</h2>
              <p className="text-xl text-white mb-4">{event.description}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-white">{event.time_from} - {event.time_to}</p>
                <div className="border-solid border-2 inline-block px-2 mt-4 hover:bg-white hover:text-desktop">
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-2xl"> See Details
              </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiveSchedule;



