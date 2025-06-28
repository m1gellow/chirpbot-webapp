import { useCallback, useEffect, useState} from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    type: 'individual'
  });
  const {tg} = useTelegram()

  const onSendData  =useCallback(() => {
    const data = {
        city: formData.city,
        name: formData.name,
    }
    tg.sendData(JSON.stringify(data))
  }, [])



  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [])


  useEffect(() => {
    tg.MainButton.setParams({
        text: "Отправить данные"
    })
  }, [])

  useEffect(() => {
        if(!formData.city || !formData.name){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
  }, [formData.city, formData.name])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="tg-form">
      <h3 className="tg-form__title">Введите данные</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="tg-input-group">
          <label className="tg-label">Ваше имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="tg-input"
            placeholder="Иван Иванов"
            required
          />
        </div>

        <div className="tg-input-group">
          <label className="tg-label">Город</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="tg-input"
            placeholder="Москва"
            required
          />
        </div>

        <div className="tg-input-group">
          <label className="tg-label">Тип клиента</label>
          <div className="tg-radio-group">
            <label className="tg-radio">
              <input
                type="radio"
                name="type"
                value="individual"
                checked={formData.type === 'individual'}
                onChange={handleChange}
              />
              <span className="tg-radio__checkmark"></span>
              Физ. лицо
            </label>
            
            <label className="tg-radio">
              <input
                type="radio"
                name="type"
                value="legal"
                checked={formData.type === 'legal'}
                onChange={handleChange}
              />
              <span className="tg-radio__checkmark"></span>
              Юр. лицо
            </label>
          </div>
        </div>

        <button type="submit" className="tg-button">
          Отправить
        </button>
      </form>
    </div>
  );
};