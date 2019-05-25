import React from 'react'
import './Content.css'

// TODO what is this component's function? When to use it? When is it not needed?
export default function Content({ className, ...props }) {
  return (
    <div className={['Content', className].join(' ')} {...props} />
  );
}