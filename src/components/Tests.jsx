import Card from './Card';
import repairImg from '../assets/cardImages/repairImg.png'
import parkingImg from '../assets/cardImages/TruckParking.png'
import truckWash from '../assets/cardImages/truckWashImg.jpg'


const  Test =() => {
    return (
<div className="flex items-center justify-center">
<div className='flex space-x-4'>

<Card 
    imageSrc={repairImg} 
    title={'TRUCK REPAIR'} 
    description={'We provide truck parts and services for  alignment, brakes, suspension, steering, air conditioning, automatic lubrication, preventative maintenance, and more ...'}
    addressLink={'https://www.google.com/maps/place/Bakersfield,+CA,+USA/@35.3420035,-119.1097545,52545m/data=!3m1!1e3!4m6!3m5!1s0x80ea6bc8b994cb0d:0x59360c0998fe74c8!8m2!3d35.3732921!4d-119.0187125!16zL20vMHFfMHo?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D'}
    />

    <Card 
    imageSrc={truckWash} 
    title={'TRUCK & TRAILER WASH'} 
    description={'Truck and Trailer wash service is available in our yard'}
    addressLink={'https://www.google.com/maps/place/Bakersfield,+CA,+USA/@35.3420035,-119.1097545,52545m/data=!3m1!1e3!4m6!3m5!1s0x80ea6bc8b994cb0d:0x59360c0998fe74c8!8m2!3d35.3732921!4d-119.0187125!16zL20vMHFfMHo?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D'}
    />

    <Card 
    imageSrc={parkingImg} 
    title={'TRUCK PARKING YARD'} 
    description={'We provide truck wash, parts and services for  alignment, brakes, suspension, steering, air conditioning, automatic lubrication, preventative maintenance, and more ...'}
    addressLink={'https://www.google.com/maps/place/Bakersfield,+CA,+USA/@35.3420035,-119.1097545,52545m/data=!3m1!1e3!4m6!3m5!1s0x80ea6bc8b994cb0d:0x59360c0998fe74c8!8m2!3d35.3732921!4d-119.0187125!16zL20vMHFfMHo?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D'}
    />
    </div>
    </div>

    );
  }

  export default Test;