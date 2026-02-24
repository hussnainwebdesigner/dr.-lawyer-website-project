// import { useState } from 'react'

// const useModals = () => {


//     const [subsctTypeModal, setSubsctTypeModal] = useState(false)
//     const [subsctPlanModal, setSubsctPlanModal] = useState(false)
//     const [paymentModal, setPaymentModal] = useState(false)
//     const [successModal, setSuccessModal] = useState(false)

//     return (
//         subsctTypeModal, setSubsctTypeModal,
//         subsctPlanModal, setSubsctPlanModal,
//         paymentModal, setPaymentModal,
//         successModal, setSuccessModal
//     )
// }

// export default useModals


import { useState } from 'react'

const useModals = () => {
    const [subsctTypeModal, setSubsctTypeModal] = useState(false)
    const [subsctPlanModal, setSubsctPlanModal] = useState(false)
    const [paymentModal, setPaymentModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false)

    return {
        subsctTypeModal, setSubsctTypeModal,
        subsctPlanModal, setSubsctPlanModal,
        paymentModal, setPaymentModal,
        successModal, setSuccessModal
    }
}

export default useModals