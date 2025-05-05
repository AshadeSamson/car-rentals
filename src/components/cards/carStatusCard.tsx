import CarStatusCard from "./carStatus";

// In your component
const  CarStats:React.FC = () => (
  <div>
    <CarStatusCard
      index={1}
      carNumber="6465"
      driverName="Alex Noman"
      status="Completed"
      earning={35.44}
    />
    <CarStatusCard
      index={2}
      carNumber="5665"
      driverName="Razib Rahman"
      status="Pending"
      earning={0.00}
    />
    <CarStatusCard
      index={3}
      carNumber="1755"
      driverName="Luke Norton"
      status="In route"
      earning={23.50}
    />
  </div>
);

export default CarStats;