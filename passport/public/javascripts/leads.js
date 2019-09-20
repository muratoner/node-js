function deleteLead(lead_id, redirect_to_leads) {
    $.ajax({
        url : '/lead/delete-json/' + lead_id,
        contentType: 'application/json; charset=utf-8;',
        dataType: 'json',
        data: JSON.stringify({ lead_id }),
        type: 'POST',
        success: (res) => {
            if(redirect_to_leads) 
                location.href = '/leads'
            console.log('Result', res)
            $(`#lead_${lead_id}`).remove()
        },
        error: (error) => {
            console.log('Error: ', error)
        }
    })
}