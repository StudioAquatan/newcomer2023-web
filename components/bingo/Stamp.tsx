type StampProps = {
  clubName: string;
  backgroundColor: string;
};

export default function Stamp({ clubName, backgroundColor }: StampProps) {
  return (
    <div>
      <style jsx>{`
        .stamp {
          position: absolute;
          width: 120px;
          height: 120px;
          background: ${backgroundColor};
        }
        .stamp-clubname {
          /* 部活名 */
          position: absolute;
          left: 5%;
          right: 5%;
          top: 5%;
          bottom: 5%;

          font-family: 'Noto Sans JP';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #FCFCFC;
          word-break: break-all;
      `}</style>
      <div className="stamp">
        <div className="stamp-clubname">{clubName}</div>
      </div>
    </div>
  );
}
