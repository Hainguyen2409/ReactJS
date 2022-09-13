export default function ProfileId() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <img
                    className="img-fluid shadow rounded-top" 
                    src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"
                    alt="avatar">
                    </img>
                    <img 
                    className="img-thumbnail shadow avatar rounded-circle" src="https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg">
                    </img>
                </div>
                <div className="card-body">
                    <div>
                        <h2 className="title">Roronoa Zorro</h2>
                        <p className="sub-title">The first Member Of Straw Hat Pirate Crew</p>
                        <button className="btn third">FOLLOW ME</button>
                    </div>
                </div>
            </div>
        </div>
    );
}