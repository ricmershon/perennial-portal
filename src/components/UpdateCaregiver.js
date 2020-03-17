import React from 'react'

class UpdateCaregiver extends React.Component {
  render () {
    return (
      <div>
      <h1>UpdateCaregiver route works</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
            />

            <input type="submit" class="button" value="Update Caregiver"/>
          </form>
      </div>
    )
  }
}

export default UpdateCaregiver
