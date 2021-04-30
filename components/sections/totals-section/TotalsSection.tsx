const totals = [
    {title: 'Lorem ipsum', total: 328, upper: true, percent: '+3.6%'},
    {title: 'Lorem ipsum', total: 1234, upper: false, percent: '-1.6%'},
    {title: 'Lorem ipsum', total: 328, upper: false, percent: '-1.6%'},
]

export const TotalsSection = () => {
    return (
            <div className="row justify-content-between my-3">
                {totals.map((e, i) => (
                    <div key={i} className='col-12 col-sm-12 col-lg-6 col-xl-3 py-2'>
                        <div key={i} className='card card__total'>
                            <div className={`card-header h4`}>{e.title}</div>
                            <div className={`card-body card__total-body`}>
                                <div className="h2">{e.total} $</div>
                            </div>
                            <div className={`card-footer card__total-footer`}>
                                <img src={e.upper ? '/assets/icons/upper_arrow.svg' : '/assets/icons/lower_arrow.svg'}
                                     alt=""/> <strong>{e.percent}</strong> <span>until last week</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}