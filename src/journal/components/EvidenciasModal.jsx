import { useMemo, useState, useEffect } from 'react';
// import { addHours, differenceInSeconds } from 'date-fns';

// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';

// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import es from 'date-fns/locale/es';
import { useUiStore } from '../../hooks';

// registerLocale( 'es', es );

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const EvidenciasModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();

  // const { activeEvent, startSavingEvent } = useCalendarStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    eviId: '',
    eviDato: '',
    eviImg: '',
    eviMensaje: '',
  });

  const titleClass = useMemo(() => {
    if (!formSubmitted) return '';

    return formValues.title.length > 0 ? '' : 'is-invalid';
  }, [formValues.title, formSubmitted]);

  // useEffect(() => {
  //   if ( activeEvent !== null ) {
  //       setFormValues({ ...activeEvent });
  //   }

  // }, [ activeEvent ])

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

//   const onDateChanged = (event, changing) => {
//     setFormValues({
//       ...formValues,
//       [changing]: event,
//     });
//   };

  const onCloseModal = () => {
    closeDateModal();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    // const difference = differenceInSeconds( formValues.end, formValues.start );

    // if ( isNaN( difference ) || difference <= 0 ) {
    //     Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error');
    //     return;
    // }

    // if (formValues.title.length <= 0) return;

    console.log(formValues);

    // TODO:
    // await startSavingEvent( formValues );
    closeDateModal();
    // setFormSubmitted(false);
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Evidencias </h1>
      <hr />
      <form className='container' onSubmit={onSubmit}>
        <hr />
        <div className='form-group mb-2'>
          <label>Evidencia id</label>
          <input
            type='number'
            className={`form-control ${titleClass}`}
            placeholder='ej. 1'
            name='title'
            autoComplete='off'
            value={formValues.eviId}
            onChange={onInputChanged}
          />
          <label>Dato</label>
          <input
            type='text'
            className={`form-control ${titleClass}`}
            placeholder=''
            name='title'
            autoComplete='off'
            value={formValues.eviDato}
            onChange={onInputChanged}
          />
        </div>
        <label>Imágen</label>
        <input
          type='file'
          className={`form-control ${titleClass}`}
          name='image'
          autoComplete='off'
          value={formValues.eviImg}
          onChange={onInputChanged}
        />
        <label>Mensaje</label>
        <input
          type='text'
          className={`form-control ${titleClass}`}
          name='image'
          autoComplete='off'
          value={formValues.eviMensaje}
          onChange={onInputChanged}
        />

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
