#pragma strict

public var projectile : Rigidbody;
public var shotPos : Transform;
public var shotForce : float = 1000f;
public var moveSpeed : float = 10f;


function Update ()
{
    var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
    var v : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;
    
    transform.Translate(new Vector3(h, v, 0f));
    
    if(Input.GetButtonUp("Fire1"))
    {
        var shot : Rigidbody = Instantiate(projectile, shotPos.position, shotPos.rotation);
        shot.AddForce(shotPos.forward * shotForce);
    }
}