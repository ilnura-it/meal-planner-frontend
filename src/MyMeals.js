import React from 'react';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai'

const MyMeals = ({ text, updatingInput, deleteMeal }) => {
  return (
    <div>
      <p>{text}
        <span>
          <AiTwotoneEdit onClick={updatingInput}></AiTwotoneEdit>
          <AiTwotoneDelete onClick={deleteMeal}></AiTwotoneDelete>
        </span>

      </p>

    </div>
  )
}

export default MyMeals