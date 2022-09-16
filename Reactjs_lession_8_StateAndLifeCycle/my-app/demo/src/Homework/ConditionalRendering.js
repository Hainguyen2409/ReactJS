import React from "react";

class ConditionalRendering extends React.Component {
    render () {
        return (
            <div className="container">
                <div>
                    <h1 style={{ textAlign: 'left', backgroundColor: 'green', color: 'white' }}>
                        <strong>ConditionalRendering</strong>
                    </h1>
                    <button onClick={this.props.onCollapse}>Đóng giới thiệu</button>
                    <h2>Giới thiệu</h2>
                    <p>
                        Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,...
                        mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component
                        mà bạn mong muốn.
                    </p>
                </div>
            </div>
        )
    }
}
export default ConditionalRendering;