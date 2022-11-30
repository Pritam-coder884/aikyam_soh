import React from "react";
import {
  Card,
  Box,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./Card.css";

const CardAlum = () => {
  return (
    <Box p={10} sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345 }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/jpeg;base64,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"
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text">
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                email@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Male
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (+919876543210)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                XYZ,BBSR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Passout-Batch:2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Branch:-Cse
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position:-Student
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location:-ABCD
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345 }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGRgYGhoaGBoaGhgYGBkaGhgZGhgZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISGjQhISs0NDQ0MTE0NDQ0MTQ0NDE0NDQ0NDQ0NDE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIANcA6gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADUQAAEDAgMFBgYBBAMAAAAAAAEAAhEDIQQSMQVBUWFxIjKBkaHwBhOxwdHhQlJicvEUFSP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEAAgMBAAMBAQAAAAAAAAABAhESITFBA1FhIhP/2gAMAwEAAhEDEQA/APE7Sf2z1WU+oVo7V756rJeUFvmI9KoYSUpmmbIGPmKzaiFCkIDfMKH8xcAoaEBWvVsyq0bk3RwubRAuHFDc6616GyXFFfsN3C/1U3F1WNmVmPWt/wBE+CReBcb7oFfYtZjQ4sMe9yu00RlFa9ByngVLXIGA5Ve9VBVXIJY9XD0vTV2lAcVFbOhBTKCxqKr3KJQ6hQXJQnvVpsguQR8xULzK4oTkDLHp4OWYwpwIK7V7x6rHctfax7Z6rHegqmKKVlM0EBwpUtUOe1tz4BASYChlNzjMwhsfbM6AAl3Yl7zDBDfr1JWbWpGpTogbyU/SbF5WTQpPbBM+f6T1N/FS1ZG3hCff5WvQLt4Pj9isHCvMWvyWph8UdII8pn7rHJvjW1QYACdY19Qn8MWv7LrssYMQeCwTiHagHr+UxhMU6ecm2m6yci4p2t8IMrAvpHK914MR42XitpbHrYc9thj+qDlPQlfTKOKIsJt9kf8A5IqNyPa1w4H7cFuZMXF8gapctv4o2Y2jU7HcdeNC07xHCVhErbCGK4CCw3RJQXJUhUDlaUEoVYqxcqPKCwNkJyuDZDeUFHKhVnlDCC7dU8HJFqbBQV2t3z1WPUWztbvHqsd4QDTVAWS4Cbw7bILl0CUCgC987lTGvlwYN2sceC08NTFNoMX9Ss2tSLHZpfdxgDQbv34KvyMpgCBx/CKXvuSY8kEOLjck+Ky3GhRqDLMdN/ighozJinRMaFDydoaRFyPJYybwnbWwTbBauHpTvj3yWXhNBuC1cO6LAeoH7XN1OswtrT5I7cLbRFoOBFwPMlXLQOI6H7LSUWmTzTlPDQM7e7/IcOazmGDZ5PIx9IW/sV9zIkOBBH64rUvbnlOniPjTZxs9uYtIk2ENPMz9l4QuX2PGFglj5yExpI5DovkmOpBj3tGgcQuuNccpomx10UFBy3RAFplMqxKrCkoKSoc5c8oTigO3RDerMNlV4QUKo1XIUNaghrbpsNQWMTSCu1R2j1WRUWxtUdo9Vj1EEMCbYYaSl6as9pcCJsBPjuCUiuBpzNR3hP19802MSYzAX0k7o1hL1qghrG6Bsnr7+qo10kNHdHrzKx634aZmddxngESmYdu+37QjXboJQMxJso09NhHBwge/2UKqy/qPVLYaqA33qjvYQ0k6n03WWMnTBoYCcoOi02YhgADnBs6aed1iYWt2WjqPz+PDmh7TwzXEF7yHEWAuecBYjpXrcNj6c5Q8OPCJ+ieyH/Vl4DBUGMMscSdTMhwXsdj7SzNDSZPHerek1Wm18y0jXSYWjgmNa4A5mSLP3AnQE3EWiDZI4jEMa0uibrL2d8WtZWyPPZNogacv2rGK9PtPAZ6TwO80noffDmvle1cK5hg928b/AFX2PA1GOa7KQWuu0jTT2F4X4wwkdqBE34SuuLjk+fuF1doXPF1IC2w6FxK6FzggC9CciuCplQXp6LioZopcgqrNCq5SxAZoTOVLMCbQB2mO0eqx6q2dp949VjVtUFqaNh2S3qgU2yi0a4aJOg18FmtQkHHMeZA+5UYhxbbj9leiZeDxJPmP0i7Xo5S23eLvRyiqDFktDXAciBEclenWG4GfCyVxQLTl5SrYdsiU1013vTcwe6f9LTe0wI6TunmvO4euWmRdbmyMXmdAkcp+xBC5ZR2xsNUsPljNYATE6rH2hjsUCHNY5rXHVrZJ4RYwvWtpkgE90neGjroLrmUHNd2c44AAn7QpMpPjWWNs6umZg8PiGhjqrc7nNB0GYZplhjfafPgm9m0iKoy91xMt4XgrQYHwTu0kxN+miTpHJUtoPrvS2UksmjO28S5hcw9kNglx0uF4501SS2o17hcjK5roicwnvAC/S6+kbew7KtFjntkPBY7QXaARJixhwvyXnKXwtTZRLm52OYc5c6CCILYJBs0Ak6K46jNt666eo+Eaj20BnsQbDl+0/tqiyuw33efIjilWvFJoYdzGg3n+I3jXX1SX/ZBpIO/W9v8AIcl0lcbO3h9o4TI+PIJOFrbaq5nZufh7iPJZZXRyQqOV4UEIBkKjgjEIbkFGKXLmLnBBUK7QqtaitCC7E2lmBMwgBtPvFY1UXW1tTvO6rGeUBMOFTH2aQN5urUTdUxzSfG/l7ClWIosjIf7m/b8p/wCKhAYeDnD1n7pJ4IAB/icx8BZH2vXNajTqAd2zuRtc8jCn1r4DWYK2Uizw24/qAFoSlN37WjsKoJAOo0+yVxVLLUeDxJ8Csfx1s6lS3RP7KeQ6bwSAkWBaeyqJJHX1WcvFx9e4wtORrut9/ASmsNh8puLdffJZWAxcGFriuIklYkdaBtt4DQ0GALk6ALzlLFsc/K0yU1tzHOzMB7LSScu+Bx5pR+Iol7XscCRZwGquiPc7Kwxr4d9HfAez/Nu7xaSEHZWZhNN8EHx6wd40kRxQNlbYawtLdxT21cji2sww10yBpPHkkZs1WPtuuM8CG5ezAAi0gW3LDxVeWRNx9Pd1FSoXkuJ1JJ85SdZ8+/fNd5HluRas8mAUOFaqLrqjcgl2psBv6q2yGONy8VyGJgxx3LqdIvMBa1XaIZRcwiWvbBHCCC13UFMfD9ARneIbvP0Cxz6dP+XYuz/gqrXbLKjc24EEA8s0/ZeTxFN7Jzsc2CQZBAkGCJ0Xs8TtV5GVjnMYDEMMF39oIueafpsqupduAx1iCO9/lOqkzW/inx83p1Vf5i+jDZmArUnsfTaypByVGAMdmjszA7V+K83sz4SdYV3ZXGDlaROUzcEi+i3ymnPhd6efBRQUXbGEbRrPpscXNaeyXCHQQCMw3G6XY5aYs0M1NgJSmngUCm1B2j1WPUW3tRvaKxKgQdSRXFveJjLf9IDXxcrPxFcuMDRBevjC4ngfYUYfFuYHNGjtRuKC1kq3yuCaNiUakGW2jRHbUc9xc4ySkm2R6boKzY3jTwMFbmx3gX4BYDDdbLAMkjguWTvi2MDUOad2qcO0f5DQG35WVgMRNN3GD5rHobRNw5pgxB6SPK6SLll1NPU4+kytAeLgAyDuWBV2I/ODT425eIQ6e2XNEQZgiec/gpvC7bhzLFoZrax/P7WnPt6XYWxwWF1RxzlvYIkNY46GP5brn9ohe+nQcx+v8ec+ygUttDMC3SI4SY18/RH2niGvZz1HIzcfVJjNlyumJmS1RMFCeN66uCKVIkOcBMC3XesRj31nRPaLovuA3+C9OyuKNElwEkH1WNsbD5ZedXGekmwXC3e69Ux1qGdtYF7GsADiDcmJk80antGp8oMczKBq4xPgOK9NSxANODBPuFnYnZPzmSDrwWWmXsnbTGPJqAZQIbMwE1V+IH4h5ZSJLG3c9whrRr2W7zwFkHH/AA6xjWsMkm54+yq4vChlINpgAb/ur0dtfZmKpPcWtuGwC4ntONtBoBuXombSw1Rvy6jntIs19swF94+8hfIcP819QMoBxduy/UncOZXstjfDNYdvEVNL5AfQuP2V1pne2TtHYFcYioxhNUB0tqWGdpGYG51g3HELPYyLHUL2O1dsU6YDKYAMdoDvcgTuXkHPkknUknzXXG2uGckEYm5SdNNwtMB7V7x6rDxNQNuVrbexQY48dwXlq1QvMkoOq1i7pwVWtUNCKwSqjmNUuEK2UqzSqFqis1ymrTi+7chNMLNjUujzHrSwOKPdWG1yPTqkGVzyxdccnpdjm729Uc7OabQvP4TGljiQddVvYLazbTHQrGUsdcbLDA2bAjjxCqNlu4iOmo8Vv4PbTAN3lKbdtdhaYhY2u3ksXhS17Q0HMbDnpB+vgtT5OURMxxSVParDWzEd6zTwjX30WiXSvRjjqdvNnlu9EnsS+IdDCeEH1Ep+o1K1KWZrm8QR5hW+Mz0rjaoeWt1geqaw7YEDl9Vg03ER4Law26NNF57HrlblESMvJNYN+XNw4cLQffJLMFgQr0LSTp7uoqr3lz4N504JLa2zC85JcAYBjXiQB0+qtjcUGEgaj3KycRt94e14mW+F4AP0Vg9TsTY7qJinTytjtF1iecwncfsjE1WO+XUYCNxcWzyB0nrC8hU+O6moa8kiO06fohj4sqv7IGW2uq1J/HO2ftl1gQSCLgkHjM3lVaprOLiXEySSSeJNyVQLu8xiiU4kKRToQeX2tVL6jnEzdIprHd8pVaRYJhghLt1TbQLIOELoRGtCn5aoFkmyWqU4sny1VcyRB1U0M5wgqzXq9SkQYKApYso+dcHlAWls6iO84A3sDceSzxa5L4R1YtLm2aNXHTw4+CticVUDe+Idrln6rSzyC06Hy/Sw6hjM06ha4Ypzy/a7KxyW1aZC9HsjakQHnsn0K8rh9Y4ghMUn9iOH2WmX0KoyyAGoXw/ivmUBvLbH7JtzFhXmn0stVzItMjobhbFBkQPfNCxLB89h4tIPgbfVbVDCiQeC8+Xr1YXeIjhHhY9Cr1G9m1vypFGT5gzw3IxpGCN/qRuUaeTxuHe91nCFjY2g4ENBkusPzK9TjABJmOPgvM1Xlzi86aDkOKsKH/w4EO13RofFHZTDBA8ealmnVc9dsZ1t5s8t3UUcqgqXlUC0wPST4Kz6SfCDyeO75Sqbx3fKUWqkWhHY/RBZqjNA4/lAZjuRRQ48DZDajMneqIc7fCkkIwJQ30Qbjsn0RlT5ea2/cfslW0QSQ4EEa7iCE2yxuI6I+OpZx80C+j/8h/LxCNFhssG7Xef6TTKGUAcEvhakWn3ZaTnAiUjID271m7RbDg4b7HwWxNll7SFhyP1SrCVN0FS8wfH6qAF1UXUVobJ2k+iTkdrqDoV6V/xGwMzFpzkxkHHjPBeIITVPtObO4T4DVBuM2m8udUIALeyOmaPqVtUtrvbALWknqOS83SYcjeL3ZvLtGfNOMcc4P9Ij7n1TjjfYTLKeV7DCbVpEw8Fp3nVqexLmhubMI3EG3gvB0cS4A8zHHfH29U4KstcwPLRludwOgMLnl+KfHTH81+s7be1BUeWtPZFiR/Lw5cUmzECWhx7HD634aWTNHZBzls906jpYquPwc1mgd1jRmPOSY66LGM/1p0yyvHYztVR7lNSuHOmUJ7xxXVwc5VBVS8cVweEBmFPhyzmOCeBCDzWP7xSadx/fKSK1UizSisKDKuwoG6ZRmGEuwptgtKQHYeKsWqtJslMhshVks5nqmdmm7mm4P4P+vFcaUi6XOZjvp+EAcZhsj9LeSNhzZaGNp52SBcQR0IlZDHEFA2EljhLSEy19ktiHyCgzGFc4zCq1cFGlnOTFGoBM7xH5+6WhPYR4G7XUpA7RxDczTldERoTvkn6Jug8FriDJvbfPTXcEs2rEuGkWHNN4ei17L7jJiRrqZ11VZFZTEsbu18hb7KXAETES4k8wB+YS4qvpmT22tMf3AGJ63RKuJaaZc0yGtjxvPqAqEhtosc8NEjSenDzS78W99tLTz4JSizsu9706RpH9I+pWZPrVt8Fa1seiE8tT1GmMoXOpjgpVZsjgrMI4J4URwV20woFqLxwWkKnJVYwJrIEHk9od4pIp3H989UkVqpEKWlQuUBmPT1KoPArPY5M01UrRY7gjsqGRHv8AKTpGQjsaSqh1r50v6KrngiDqqNafyi/L4qiG1iIBuAI5pHEtGaRonDhzxStVp0O4qAeex6JGu+yaqGAVmPfKlWKhQ1cFam2SitKj8sAAtHW8o9FjDpbxss91IuNlV1F7LwVRrOpCLFaOymkAidQVhYbFZjBW/g3iOnmjLoEtnWTKxNqnI4tHdeAYG45jf0C3anrKwdrv/wDSOA+5SrCmGuCIPL34ptk6EXA9ylsO4o7nXUimKVctEarjincF2FujFvJS+kLHFO4KRin8Ef5altNRVKdZ53J4Pch02J4NCDy20G9o9UiVqbQbLj1Wa4LVZiihWhcioR2P0QYUtKB+lU/2tGk7h0WG16dwtbckGox0a+UIwfa+5JtciFaZMNcTpooe0FCY8C0yripb6IM7H0srSQscr05YHgg6H1SLcMxroDQet1LFlYwTNDDv1yn0TuJwbZzN7Ii8ceXBCylnaDpafTqpo2PhgRqE+zTTWyToVs2pTbTuViM7GYSHB7Bbgn9n4idTusilsiPBJ4Jga6CLTZBpF3ovO4981HcoHotmpUiffFedc6XE8SUqwWm6EwClmozeCKewZsSil6ikyBCktCxVXDlcFCbbeplAdhTUrPY66blB52vVJcZSz1y5aRQhdC5cgmFELlyCQiMK5cgew9Up4GVy5VkRrFSItquXKi76mUWSbCSVy5QS8Zs7eQSWDfqw6aFSuRof5BboZCbovJtC5cjI7bD6KjGgXXLlQnj6kM5lZDQpXLNWC009hKX8vJcuSrDd1QgrlyyqRTUhhXLkF2iExnXLkH//2Q=="
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text">
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                email@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Male
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (+919876543210)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                XYZ,BBSR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Passout-Batch:2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Branch:-Cse
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position:-Student
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location:-ABCD
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>

      <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345 }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/jpeg;base64,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"
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text">
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                email@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Male
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (+919876543210)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                XYZ,BBSR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Passout-Batch:2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Branch:-Cse
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position:-Student
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location:-ABCD
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};

export default CardAlum;
